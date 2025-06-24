import { IconHelp, IconPlus } from "@tabler/icons-react";

const PerformanceMetricCard = ({
  label,
  description,
  value,
}: {
  label: string;
  description: string;
  value: string;
}) => {
  return (
    <div className="bg-[#222324] p-[30px] border border-[#525252] rounded-[5px]">
      <div className="w-full flex items-center justify-between gap-0.5 text-lg mb-2.5">
        <span className="font-medium">{label}</span>
        <IconHelp size={16} className="text-[#888888]" />
      </div>
      <div className="w-full text-xs text-[#BBBBBB] mb-10">{description}</div>
      <div className="w-full text-end text-[32px] font-bold">{value}</div>
    </div>
  );
};

function Analytics() {
  return (
    <div className="mt-[50px]">
      <div></div>
      <div className="space-y-2.5">
        <div className="flex w-full justify-between">
          <h1 className="font-[600] text-2xl">Key Performance Indicators</h1>
          <div className="flex items-center gap-1 py-1.5 px-2.5 bg-[#18181A80] border border-[#5A5A5AA1] rounded-[5px]">
            Variables <IconPlus />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <PerformanceMetricCard
            label="Infrastructure Units"
            description="This describes variable two and what the shown data means."
            value="€421.07"
          />
          <PerformanceMetricCard
            label="Charging Growth"
            description="This describes variable two and what the shown data means."
            value="33.07"
          />
          <PerformanceMetricCard
            label="Localization change"
            description="This describes variable two and what the shown data means."
            value="21.9%"
          />
          <PerformanceMetricCard
            label="Fleet growth"
            description="This describes variable two and what the shown data means."
            value="7.03%"
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
