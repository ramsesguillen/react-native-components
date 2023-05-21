export interface MenuItem {
  name: string;
  icon: string;
  components: Screens;
}

type Screens = 'Animation101Screen' | 'Animation102Screen' | 'SwitchScreen' | 'AlertScreen' | 'TextInputScreen' | 'PullToRefreshScreen' | 'SectionListScreen' | 'ModalScreen' | 'InfinityScrollScreen' | 'SlidesScreen';
