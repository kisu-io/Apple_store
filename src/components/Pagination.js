import {Pagination} from 'react-bootstrap';

const PaginationBar = ({pageNum, setPageNum, totalPageNum}) => {
  const handleClickOnFirst = () => {
    setPageNum(1);
  };
  const handleClickOnPrev = () => {
    if (pageNum > 1) setPageNum((num) => num - 1);
  };

  const handleClickOnLast = () => {
    setPageNum(totalPageNum);
  };
  const handleClickOnNext = () => {
    if (pageNum < totalPageNum) setPageNum((num) => num + 1);
  };

  const handleClickOnPage = (page) => {
    setPageNum(page);
  };
  return (
    <Pagination className="mt-3 justify-content-center">
      <Pagination.First disabled={pageNum === 1} onClick={handleClickOnFirst} />
      <Pagination.Prev disabled={pageNum === 1} onClick={handleClickOnPrev} />
      <Pagination.Item active={pageNum === 1} onClick={() => handleClickOnPage(1)}>
        {1}
      </Pagination.Item>
      <Pagination.Item active={pageNum === 2} onClick={() => handleClickOnPage(2)}>
        {2}
      </Pagination.Item>
      <Pagination.Item active={pageNum === 3} onClick={() => handleClickOnPage(3)}>
        {3}
      </Pagination.Item>

      <Pagination.Next disabled={pageNum === totalPageNum} onClick={handleClickOnNext} />
      <Pagination.Last disabled={pageNum === totalPageNum} onClick={handleClickOnLast} />
    </Pagination>
  );
};

export default PaginationBar;
