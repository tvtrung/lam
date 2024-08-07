import Icon from 'components/atoms/icon';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  placeholder: string;
}

const SearchForm: React.FC<Props> = ({ className: addClass, placeholder }) => {
  const className = mapModifiers('a-search-form');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  const { q } = router.query;
  const [key, setKey] = useState('');

  useEffect(() => {
    setKey(q as string || '');
  }, [q]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/blog/search?q=${key}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/blog/search?q=${key}`);
    }
  };

  return (
    <div className={classNames}>
      <input
        className="a-search-form__input"
        placeholder={placeholder}
        type="search"
        value={key}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={ (e) => handleInputChange(e) }
      />
      <button className="a-search-form__button" type="button" onClick={handleSubmit}>
        <Icon iconName="search" />
      </button>
    </div>
  );
};

export default SearchForm;
