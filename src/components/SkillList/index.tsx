type SkillData = {
  id: number;
  name: string;
};

interface ISkillList {
  data: SkillData[];
  title?: string;
}

const SkillList = ({ data, title }: ISkillList) => {
  return (
    <div className="flex flex-col">
      {title && <h3 className="text-xl text-react font-semibold">{title}</h3>}
      <ul className={title ? "mt-2" : "md:mt-11"}>
        {data.map((skill) => (
          <li key={skill.id} className="my-4">
            <p className="text-base">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
