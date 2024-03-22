
const { render, fireEvent } = require('@testing-library/vue')
const ButtonComponent = require('./components/ButtonComponents.vue').default

describe('ButtonComponent', () => {
  test('emits event when button is clicked', async () => {
        const wrapper = mount(ButtonComponent)
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted().buttonClicked).toBeTruthy()
   
  })
})