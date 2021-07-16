import { projectTypes } from "@utils/data";
import { useState } from "react";

const FilterList: React.FC = () => {
    const [projectType, setProjectType] = useState("");
    const [selectedTech, setSelectedTech] = useState("");

    return (
        <div className="flex flex-col md:flex-row items-center">
            <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="form-select my-2 md:my-0 md:mx-2 block border border-gray rounded-xl hover:shadow-sm cursor-pointer dark:bg-black"
            >
                <option disabled value="">
                    Project Type
                </option>
                {projectTypes.map((type) => (
                    <option key={type.id} value={type.type}>
                        {type.type}
                    </option>
                ))}
            </select>

            <select className="form-select my-2 md:my-0 md:mx-2 block border border-gray rounded-xl hover:shadow-sm cursor-pointer dark:bg-black">
                <option disabled selected>
                    Technologies
                </option>
                <option>All</option>
                <option>Full-stack</option>
                <option>Front-end</option>
                <option>Back-end</option>
            </select>
        </div>
    );
};
export default FilterList;
