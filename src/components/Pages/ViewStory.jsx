import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { approveStoryAction, getSingleStoryAction } from '../../actions/storiesAction';

const ViewStory = ({ match }) => {
	const appState = useSelector((state) => state);
	const dispatch = useDispatch();
	const { id } = match.params;

	useEffect(
		() => {
			dispatch(getSingleStoryAction(id));
		},
		[ dispatch, id ]
	);

	const approveHandler = (e) => {
		e.preventDefault();
		const updatedStory = {
			...appState.stories.singleStory[0],
			status: 'approved'
		};
		dispatch(approveStoryAction(updatedStory));
	};

	return (
		<div className="app-form">
			{appState.loader.appLoader ? (
				<div className="app-loader">
					<img
						src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583399948/flipad/loader_wfbk2j.gif"
						alt="loading"
					/>
				</div>
			) : (
				<div>
					<div className="form-header-text">
						<b>Story Information</b>
					</div>
					{appState.stories.singleStory.map((story) => (
						<div key={story.id}>
							<div>
								<b>Summary:</b> {story.summary}
							</div>
							<br />
							<div>
								<b>Description:</b> {story.description}
							</div>
							<br />
							<div>
								<b>Type:</b> {story.type}
							</div>
							<br />
							<div>
								<b>Complexity:</b> {story.complexity}
							</div>
							<br />
							<div>
								<b>Time:</b> {story.estimatedHrs}
							</div>
							<br />
							<div>
								<b>Cost:</b> {story.cost}
							</div>
							<br />
							<div>
								<b>Status:</b> {story.status}
							</div>
						</div>
					))}
					{appState.auth.userInfo.role === 'admin' ? (
						<div>
							<br />
							<button type="submit" className="btn-success app-button" onClick={approveHandler}>
								Approve
							</button>
							&nbsp;&nbsp;&nbsp;
							<button type="submit" className="btn-danger app-button">
								Reject
							</button>
						</div>
					) : (
						''
					)}
				</div>
			)}
		</div>
	);
};

export default ViewStory;
