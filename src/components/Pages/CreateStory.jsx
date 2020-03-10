import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStoryAction } from '../../actions/storiesAction';

const CreateStory = ({ history }) => {
  const appState = useSelector((state) => state);
  console.log(appState, 'ass')
	const dispatch = useDispatch();

	const myInput = {
		summary: '',
		description: '',
		time: '',
		cost: '',
		type: '',
		complexity: ''
	};

	const [ inputs, setInputs ] = useState(myInput);

	const onChange = (e) => {
		e.persist();
		setInputs((inputs) => ({
			...inputs,
			[e.target.name]: e.target.value
		}));
	};
	const formSubmitHandler = (e) => {
		e.preventDefault();
		const storyInfo = Object.assign({}, inputs);
		dispatch(addStoryAction(storyInfo, history));
  };
  
	return (
		<div className="app-form">
      {
        appState.loader.appLoader ? (
          <div className="app-loader">
            <img
              src="https://res.cloudinary.com/dreamqube-technology-limited/image/upload/v1583399948/flipad/loader_wfbk2j.gif"
              alt="loading"
            />
          </div>
        ) : (
			<form onSubmit={formSubmitHandler}>

				<div className="form-header-text">
					<b>Create A Story</b>
				</div>
        <div className={
          appState.stories.message.category === 'success' ? 'success-msg' :
          'error-msg'
        }>
        {appState.stories.message.value}
        </div>

				<div className="error">{}</div>

				<div className="form-group">
					<label htmlFor="email">Summary</label>
					<input
						type="text"
						className="form-control"
						placeholder="Summary"
						name="summary"
						value={inputs.summary}
						onChange={onChange}
						minLength="5"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Description</label>
					<textarea
						className="form-control"
						rows="3"
						placeholder="Description..."
						name="description"
						value={inputs.description}
						onChange={onChange}
						minLength="20"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Type</label>
					<select className="form-control" name="type" onChange={onChange}>
						<option value="enhancement">Enhancement</option>
						<option value="bugfix">Bugfix</option>
						<option value="development">Development</option>
						<option value="qa">QA</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="email">Complexity</label>
					<select className="form-control" name="complexity" onChange={onChange}>
						<option value="low">Low</option>
						<option value="mid">Mid</option>
						<option value="high">High</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="email">Estimated Time(Hrs)</label>
					<input
						type="number"
						className="form-control"
						placeholder="Estimated time"
						value={inputs.time}
						name="time"
						onChange={onChange}
						min="1"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Cost</label>

					<div className="input-group">
						<div className="input-group-addon">$</div>
						<input
							type="number"
							className="form-control"
							placeholder="Amount"
							name="cost"
							value={inputs.cost}
							onChange={onChange}
							min="1"
							required
						/>
					</div>
				</div>

				<button type="submit" className="btn-primary submit-button">
					Submit
				</button>
			</form>
        )}
		</div>
	);
};

export default CreateStory;
