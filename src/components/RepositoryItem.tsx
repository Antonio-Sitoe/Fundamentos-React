export interface Props {
  repository: {
    url: string;
    name: string;
    description: string;
  };
}

const RepositoryItem = ({ repository }: Props) => {
  const { name, description, url } = repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={url}>Acessar</a>
    </li>
  );
};

export default RepositoryItem;
