import { IconReload, IconSearch, IconSparkles } from "@tabler/icons-react";

function FilterSection() {
  return (
    <div className="flex gap-2.5 items-center">
      <div className="flex bg-[#2C2E334D] border border-[#5A5A5A] rounded-[5px] py-[8.5px] px-3 gap-2 items-center flex-1 w-full">
        <IconSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-white"
        />
      </div>
      <div className="bg-[#242424] border-[.67px] border-[#5A5A5A] flex justify-center items-center px-5 py-[7px] rounded-[4px] gap-2.5">
        <IconSparkles className="text-[#B9B9B9]" />
        <span>Autofill</span>
      </div>
      <div className="bg-[#23291E] border-[.67px] border-[#577113] flex justify-center items-center px-5 py-[7px] rounded-[4px] gap-2.5">
        <IconReload className="text-[#C9FF3B]" />
        <span className="text-[#C9FF3B]">Rerun</span>
      </div>
    </div>
  );
}

export default FilterSection;
