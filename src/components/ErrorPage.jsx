import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Ocorreu algum erro ao acessar essa página</h1>
      <p>
        <i>{error.statusText}</i>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
