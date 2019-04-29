const Menu = [
  {
    name: 'button',
    title: 'Button 按钮',
  },
  {
    name: 'test',
    title: 'Test 测试',
  },
  {
    name: 'loading',
    title: 'Loading'
  },
  {
    name: 'message',
    title: 'Message'
  }
]

function formatMenuRoute(data) {
  return data.map(item => {
    const result = {
      path: `/component/${item.name}`,
      name: item.name,
      component: () => import(`../docs/${item.name}.md`),
      meta: item.meta || {}
    }
    return result
  })
}

export const MenuRoute = formatMenuRoute(Menu)
export default Menu