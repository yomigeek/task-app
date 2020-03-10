const dummyStory = [
  {
  createdBy: 2,
  id: 1, 
  summary: '1st story created by 2',
  description: 'dummy desc',
  type: 'enhancement',
  complexity: 'high',
  estimatedHrs: 1,
  cost: 100,
  status: 'approved',
  },
  {
    createdBy: 2,
    id: 2,
    summary: '1st story created by 1',
    description: 'dummy desc',
    type: 'enhancement',
    complexity: 'high',
    estimatedHrs: 5,
    cost: 10,
    status: 'rejected' 
 
    },
    {
      createdBy: 3,
      id: 3,
      summary: '1st story created by 3',
      description: 'dummy desc',
      type: 'enhancement',
      complexity: 'high',
      estimatedHrs: 17,
      cost: 25,
      status: 'rejected' 
 
      },
]

const success = {
  success: 'added'
}
export { dummyStory, success } ;
