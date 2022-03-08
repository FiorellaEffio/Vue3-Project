import { shallowMount } from '@vue/test-utils'
import PostList from '@/components/PostList.vue'

describe('PostList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(PostList, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
