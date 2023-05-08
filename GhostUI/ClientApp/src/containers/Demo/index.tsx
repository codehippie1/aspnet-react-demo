import { Axios } from 'axios';
import type { FunctionComponent } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { demoGetUserGroup, useDemoGetUserGroup } from '../../api/demo-api';
import { ReactComponent as ReactCoreSVG } from '../../assets/image/ReactCore.svg';

const Demo: FunctionComponent = () => {

  //const queryClient = useQueryClient()

  //const { isLoading, error, data: ugInfo } = useQuery('ugInfo', () =>
  //  fetch('http://localhost:52530/api/Demo/GetUserGroup').then(res => {
  //    const result = res.json();
  //    //console.error(ugInfo);
  //    return result;
  //  })
  //)

  const { isLoading, error, data: ugInfo } = useDemoGetUserGroup();

  if (isLoading) return (<>{`Loading...`}</>)


  return (
    <div className="demo-wrapper p-4 m-4">
      <h2>Demo</h2>
      <div className="card p-2">
        {/*<div>{`${JSON.stringify(ugInfo)}`}</div>*/}
        <div className="columns">
          <div className="column">
            <label>.NET User Group Name: </label>
          </div>
          <div className="column">
            <strong>{ugInfo?.groupName}</strong>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label>Group Organizer: </label>
          </div>
          <div className="column">
            <strong>{ugInfo?.groupAdmin}</strong>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <label>Today's event': </label>
          </div>
          <div className="column">
            <strong>{ugInfo?.eventName}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;