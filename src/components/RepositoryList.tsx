import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import styles from "./Repositores.module.scss";

const api = "https://api.github.com/orgs/rocketseat/repos";
const RepositoryList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsloading(false);
      });
  }, []);

  return (
    <div className={styles.repositoryList}>
      <h1>Lista de repositorio</h1>
      {isLoading && <p>is loading</p>}
      <ul>
        {data.map((item, i) => {
          return <RepositoryItem key={i} repository={item} />;
        })}
      </ul>
    </div>
  );
};

export default RepositoryList;
