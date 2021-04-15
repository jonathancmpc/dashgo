import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/dist/client/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  
  //Exemplo: /users = true e também /users/create=true. Se estiver dentro da rota principal retorna true
  const hrefPart = asPath.indexOf(String(rest.href)) != -1;

  let isActive = false;

  if (hrefPart|| asPath === rest.as) {
    isActive = true;
  }
  
  /* Clonamos o lemento que estamos recebendo dentro do link e trocamos uma propriedade dele e mandamos de volta */
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })} 
    </Link>
  );
}