import {installQuasarPlugin} from "@quasar/quasar-app-extension-testing-unit-jest";
import {mount} from "@vue/test-utils";
import Example from '../../components/Example.vue';

installQuasarPlugin();

describe('example', () => {
    it('should be able to mount quasar', () => {
        const wrapper = mount(Example);
        expect(wrapper.vm).toBeTruthy();
    })
})
