import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Content,
  PageTitle,
  LinkStyled,
  ErrorMessage,
} from '../../shared/components';
import { useLaunchById } from './Launch.hook';

type ParamsPros = {
  id: string;
};

export function Launch() {
  const { id } = useParams<ParamsPros>();

  const { data, loading, error } = useLaunchById({
    skip: !id,
    variables: {
      id: typeof id === 'string' ? parseFloat(id) : 0,
    },
  });

  if (error) {
    return (
      <ErrorMessage text="Something went wrong. Please try again later." />
    );
  }

  return (
    <>
      {loading ? (
        <PageTitle title="Loading details" />
      ) : (
        <PageTitle title="Launch Details">
          <LinkStyled direction="prepend" to="/launches" title="Launches">
            Back
          </LinkStyled>
        </PageTitle>
      )}

      <Content>
        <h2>Content description goes here...</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          fugit pariatur quas quia voluptatibus! Architecto eos fuga illo
          inventore rem repellendus tempora totam vero. Cumque dicta illo
          possimus praesentium quod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          fugit pariatur quas quia voluptatibus! Architecto eos fuga illo
          inventore rem repellendus tempora totam vero. Cumque dicta illo
          possimus praesentium quod.
        </p>
      </Content>
    </>
  );
}
