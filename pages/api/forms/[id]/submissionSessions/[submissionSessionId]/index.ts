import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../../../../auth/[...nextauth]';
import { getServerSession } from "next-auth/next"

import NextCors from "nextjs-cors";
import { formHasOwnership } from "../../../../../../lib/api";
import { prisma } from "../../../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Check Authentication
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: "Not authenticated ndfn" });
  }

  const formId = req.query.id.toString();
  const submissionSessionId = req.query.submissionSessionId.toString();

  const ownership = await formHasOwnership(session, formId);
  if (!ownership) {
    return res.status(401).json({
      message: "You are not authorized to access this submission session",
    });
  }

  // DELETE /api/forms/:id/submissionSessions/:submissionSessionId
  // Updates an existing form
  // Required fields in body: -
  // Optional fields in body: title, published, finishedOnboarding, elements, elementsDraft
  if (req.method === "DELETE") {
    const prismaRes = await prisma.submissionSession.delete({
      where: { id: submissionSessionId },
    });
    return res.json(prismaRes);
  }
  // Unknown HTTP Method
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported by this route.`
    );
  }
}
