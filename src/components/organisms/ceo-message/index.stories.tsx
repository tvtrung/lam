import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from 'components/atoms/icon';
import Text from 'components/atoms/text';
import CeoMessage from 'components/organisms/ceo-message';
import React from 'react';

export default {
  title: 'Components/Organisms/CeoMessage',
  component: CeoMessage,
  parameters: { paddings: { default: 'none' } },
} as ComponentMeta<typeof CeoMessage>;

const Template: ComponentStory<typeof CeoMessage> = args => <CeoMessage {...args}></CeoMessage>;

export const Normal = Template.bind({});
Normal.args = {
  title: 'THÔNG ĐIỆP TỪ CEO',
  label: 'MESSAGE',
  author: 'Kazuyasu Kawahara',
  position: 'CEO',
  image: '/images/ceo-halfbody.png',
  imageSP: '/images/ceo-halfbody-sp.jpg',
  children: (
    <>
      <Text>
        Sứ mệnh của chúng tôi là trở thành một doanh nghiệp tạo dựng được niềm tin và sự kì vọng từ khách hàng bằng việc
        cống hiến, hỗ trợ cho công việc kinh doanh và phát triển của quý khách hàng. Nhưng, để thực hiện và duy trì được
        điều này không phải là một công việc dễ dàng. Nó đòi hỏi sự học hỏi và hoàn thiện của từng thành viên trong công
        ty.
      </Text>
      <Text>
        Đối với nhân viên, chúng tôi yêu cầu luôn phải duy trì tinh thần làm việc với động lực mạnh mẽ, học hỏi – hoàn
        thiện và trở nên chuyên nghiệp qua công việc hàng ngày. Để đội ngũ nhân viên chuyên nghiệp hơn, tôi luôn hướng
        cho nhân viên tại Lampart đến những mục tiêu sau
      </Text>
      <ul className="o-ceo-message__list">
        <li className="o-ceo-message__item">
          <Icon iconName="target" className="o-ceo-message__icon" />
          <Text modifiers="bold">Luôn thử thách để hướng tới mục tiêu cao hơn.</Text>
        </li>
        <li className="o-ceo-message__item">
          <Icon iconName="work-hard" className="o-ceo-message__icon" />
          <Text modifiers="bold">Luôn làm việc hết lòng và tâm hồn mình.</Text>
        </li>
        <li className="o-ceo-message__item">
          <Icon iconName="understand" className="o-ceo-message__icon" />
          <Text modifiers="bold">
            Hiểu được rằng thành quả cống hiến cho người khác cũng là thành quả của bản thân mình.
          </Text>
        </li>
        <li className="o-ceo-message__item">
          <Icon iconName="joy" className="o-ceo-message__icon" />
          <Text modifiers="bold">Tìm thấy niềm vui thật sự khi làm những công việc khó.</Text>
        </li>
        <li className="o-ceo-message__item">
          <Icon iconName="pressure" className="o-ceo-message__icon" />
          <Text modifiers="bold">Vượt qua những áp lực công việc để nâng cao trình độ của bản thân.</Text>
        </li>
        <li className="o-ceo-message__item">
          <Icon iconName="idea" className="o-ceo-message__icon" />
          <Text modifiers="bold">
            Lắng nghe ý kiến, đề án từ nhân viên và cùng nhân viên cải thiện công ty tốt hơn.
          </Text>
        </li>
      </ul>
      <Text>Với ý thức và hành động mỗi ngày như thế, chúng tôi tin rằng hiệu quả sẽ dần tăng lên theo từng ngày.</Text>
      <div className="o-ceo-message__quote">
        Ngày hôm nay sẽ tốt hơn ngày hôm qua, và ngày mai nhất định sẽ tốt hơn ngày hôm nay
      </div>
      <Text>
        Sự phát triển của công ty luôn gắn liền với sự trưởng thành của từng nhân viên. Cùng với nhận thức đó, chúng tôi
        sẽ không ngừng cố gắng và hoàn thiện hơn nữa nhằm hỗ trợ được tốt nhất cho sự phát triển kinh doanh không chỉ
        của những quý khách hàng hiện tại mà của cả những quý khách hàng trong tương lai mà chúng tôi có cơ hội được hợp
        tác.
      </Text>
    </>
  ),
};
