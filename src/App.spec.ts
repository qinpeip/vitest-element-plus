import { mount } from '@vue/test-utils';
import App from './App.vue';
import { describe, it, expect } from 'vitest';
import { nextTick } from 'vue';

describe('App test', () => {
  const wrapper = mount(App);
  it('test form', async () => {
    expect(wrapper.find('.el-button').text()).toEqual('登录');
    await wrapper.find('.el-button').trigger('click');
    await nextTick();
    expect(wrapper.find('.el-form-item__error').exists()).toBe(true);
  });
});

