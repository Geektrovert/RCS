type PropTypes = {
  data: string[];
};

const ParallerLoadingExample: React.FC<PropTypes> = ({ data }) => {
  return (
    <ul>
      {data.map((data) => (
        <li key={data}>{data}</li>
      ))}
    </ul>
  );
};

export default ParallerLoadingExample;
