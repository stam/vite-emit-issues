import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('The HelloWorld component', () => {
  it('fires events', async () => {
    const wrapper = mount(HelloWorld);

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toBe('asdf');
  });
});
