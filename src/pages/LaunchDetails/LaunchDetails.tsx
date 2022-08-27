import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Content,
  PageTitle,
  ErrorMessage,
  LinkStyled,
} from '../../shared/components';
import { useLaunchById } from './Launch.hook';
import { ArrowLeft } from '../../assets/icons';
import { RelatedMissions } from './components';

type ParamsPros = {
  id: string;
};

export function LaunchDetails() {
  const { id } = useParams<ParamsPros>();
  const { data, loading, error } = useLaunchById({
    variables: {
      id: typeof id === 'string' ? parseFloat(id) : 0,
    },
  });

  const pageBackLink = (
    <LinkStyled direction="prepend" to="/launches" title="Go back to Launches">
      <ArrowLeft />
      Back
    </LinkStyled>
  );

  if (error) {
    return (
      <>
        {pageBackLink}
        <ErrorMessage text="Something went wrong. Please try again later" />
      </>
    );
  }

  if (!loading && !data) {
    return <PageTitle title="No data">{pageBackLink}</PageTitle>;
  }

  return (
    <>
      {loading ? (
        <PageTitle title="Loading details..." />
      ) : (
        <PageTitle title="Launch Details">{pageBackLink}</PageTitle>
      )}

      <Content>
        {loading ? (
          <h3>Processing...</h3>
        ) : (
          <>
            <h2>{data?.launch.mission_name}</h2>
            <p>{data?.launch.details}</p>
            <dl>
              <dt>{data?.launch.rocket.rocket_name}:</dt>
              <dd>{data?.launch.rocket.rocket.company}</dd>
              <dd>{data?.launch.rocket.rocket.name}</dd>
              <dd>{data?.launch.rocket.rocket.mass.kg}</dd>
            </dl>

            <br />

            <dl>
              <dt>
                <strong>Payloads:</strong>
              </dt>
              <dd>
                <strong>Gto: </strong> {data?.launch.payloads.gto}
              </dd>
              <dd>
                <strong>Leo: </strong>
                {data?.launch.payloads.leo}
              </dd>
              <dd>
                <strong>Mars:</strong> {data?.launch.payloads.mars}
              </dd>
            </dl>

            <br />

            <RelatedMissions rocketName={data?.launch.rocket.rocket_name} />
          </>
        )}
      </Content>
    </>
  );
}
