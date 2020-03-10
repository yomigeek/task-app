import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoriesAction } from '../../actions/storiesAction';
import StoryTable from '../Layouts/StoryTable';


const Dashboard = () => {
	const appState = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(getStoriesAction());
		},
		[ dispatch ]
	);
	return (
		<Fragment>
      {appState.loader.appLoader ? (
          <div className="app-loader">
            <img
              src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583399948/flipad/loader_wfbk2j.gif"
              alt="loading"
            />
          </div>
        ) : <StoryTable stories={appState.stories} />
      }
			
		</Fragment>
	);
};

export default Dashboard;
