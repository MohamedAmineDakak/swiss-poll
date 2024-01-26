import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { classNames } from "../../lib/utils";

interface Props {
  value: string | number;
  label: string;
  toolTipText: string;
  trend?: number;
  smallerText?: boolean;
}

const AnalyticsCard: React.FC<Props> = ({
  value,
  label,
  toolTipText,
  trend,
  smallerText,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md">
      <div key={label} className="px-4 py-5 sm:p-6">
        <dt className="inline-flex text-base font-normal text-gray-900 has-tooltip">
          {label}{" "}
          {toolTipText && (
            <QuestionMarkCircleIcon className="w-4 h-4 ml-1 text-ui-green hover:text-ui-gray-dark" />
          )}
          {toolTipText && (
            <span className="flex p-1 px-4 -mt-6 -ml-8 text-xs text-center text-white bg-gray-600 rounded shadow-lg grow tooltip">
              {toolTipText}
            </span>
          )}
        </dt>
        <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
          <div
            className={classNames(
              smallerText ? "text-lg" : "text-xl",
              "flex items-baseline text-xl font-semibold text-gray-800"
            )}
          >
            {value}
          </div>

          {trend && (
            <div
              className={classNames(
                trend >= 0
                  ? "bg-green-100 text-green-800"
                  : "bg-ui-green-100 text-ui-green-800",
                "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
              )}
            >
              {trend >= 0 ? (
                <ArrowUpIcon
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-ui-green-500"
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">
                {trend >= 0 ? "Increased" : "Decreased"} by
              </span>
              {trend} %
            </div>
          )}
        </dd>
      </div>
    </div>
  );
};

export default AnalyticsCard;
