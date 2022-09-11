import {shallowMount} from '@vue/test-utils';
import NavBar from '../../src/components/NavBar.vue'
import App from '../../src/App.vue'
import router from '../../src/router/index.js'



describe('App.vue', () => {
  it('NavBar component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(NavBar).exists()).toBe(true)
  })
})




