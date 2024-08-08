import Title from 'components/atoms/title';
import CompanyInfo, { CompanyInfoProps } from 'components/molecules/company-info';
import Gallery, { GalleryProps } from 'components/molecules/gallery';
import Container from 'components/organisms/container';
import { mapClassnames } from 'helpers/components';

interface OfficeInfoProps {
  className?: string;
  title: string;
  dataGallery: GalleryProps['images'];
  dataCompany: CompanyInfoProps['items'];
}

const OfficeInfo: React.FC<OfficeInfoProps> = ({ className: addClass, title, dataGallery, dataCompany }) => {
  const classNames = mapClassnames('o-office-info', addClass);
  return (
    <section className={classNames}>
      <Container>
        <Title className="o-office-info__title a-animated-block a-animated-fadeinup">
          <span>{title}</span>
        </Title>
        <Gallery images={dataGallery} />
      </Container>
      <div className="o-office-info__company">
        <CompanyInfo items={dataCompany} />
      </div>
    </section>
  );
};

export default OfficeInfo;
