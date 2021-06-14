import { shallowMount } from '@vue/test-utils';
import Index from '@/views/index/index.vue';

describe('Index.vue', () => {
  const wrapper = shallowMount(Index);
  it('s a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
