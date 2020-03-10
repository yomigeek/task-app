import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const StoryTable = ({ stories }) => {
	let num = 1;

	return (
		<div className="table-responsive" bis_skin_checked="1">
			<table className="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Summary</th>
						<th>Description</th>
						<th>Type</th>
						<th>Complexity</th>
						<th>Time for completion (Hrs)</th>
						<th>Cost ($)</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{stories.stories.map((story) => (
						<tr key={uuid()}>
							<th scope="row">{num++}</th>
							<td>
								<Link to={`/view/${story.summary}`}>{story.summary}</Link>
							</td>
							<td>{story.description}</td>
							<td>{story.type}</td>
							<td>{story.complexity}</td>
							<td>{story.estimatedHrs}</td>
							<td>{story.cost}</td>
							<td className={story.status === 'approved' ? 'approved-status' : 'rejected-status'}>
								{story.status.toUpperCase()}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StoryTable;
