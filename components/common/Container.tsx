import classNames from 'classnames';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('max-w-7xl mx-auto px-6', className)}>
      {children}
    </div>
  );
};

export default Container;
