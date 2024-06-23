
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';

import { Main } from './panels';

export const App = () => {
  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={'main'}>
          <Main id={'main'}/>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
