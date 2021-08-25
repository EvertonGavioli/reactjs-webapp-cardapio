import React from "react";

export default function MessageError(mensagens: string[]) {
  return (
    <div>
      Ocorreu um problema ao realizar sua solicitação.
      <br />
      {mensagens.map((msg: string) => (
        <>
          <span>{msg}</span>
          <br />
        </>
      ))}
    </div>
  );
}
