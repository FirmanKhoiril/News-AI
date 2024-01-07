const data = [
  {
    priority: 'high',
    title: 'High Priority Task 1',
    desc: 'This is a high priority task with a long description that contains more than 50 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue erat eu erat feugiat, eget efficitur mi efficitur. Sed nec tincidunt justo. Proin dapibus odio non consectetur facilisis. Sed id augue eu sapien commodo tristique in ac sapien. Fusce sodales turpis at diam venenatis, auctor vehicula.',
  },
  {
    priority: 'average',
    title: 'Average Task 1',
    desc: 'This is an average priority task with a moderate description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue erat eu erat feugiat, eget efficitur mi efficitur.',
  },
  {
    priority: 'low',
    title: 'Low Task 1',
    desc: 'This is a low priority task with a short description.',
  },
  {
    priority: 'high',
    title: 'High Priority Task 2',
    desc: 'Another high priority task with a long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue erat eu erat feugiat, eget efficitur mi efficitur. Sed nec tincidunt justo. Proin dapibus odio non consectetur facilisis. Sed id augue eu sapien commodo tristique in ac sapien. Fusce sodales turpis at diam venenatis, auctor vehicula.',
  },
  {
    priority: 'average',
    title: 'Average Task 2',
    desc: 'Another average priority task with a moderate description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue erat eu erat feugiat, eget efficitur mi efficitur.',
  },
  {
    priority: 'low',
    title: 'Low Task 2',
    desc: 'Another low priority task with a short description.',
  },
  {
    priority: 'average',
    title: 'Low Task 2',
    desc: 'Another low priority task with a short description.',
  },
  {
    priority: 'high',
    title: 'Low Task 2',
    desc: 'Another low priority task with a short description.',
  },
  {
    priority: 'average',
    title: 'Low Task 2',
    desc: 'Another low priority task with a short description.',
  },
  {
    priority: 'low',
    title: 'Low Task 2',
    desc: 'Another low priority task with a short description.',
  },
  // You can add more objects as needed
]

export default data.map((e, i) => ({ id: i, ...e }))
