import { Link, Route } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

type Props = {
  content: string;
  totalPages: string
};

export default function PaginationLink( { content, totalPages }: Props ) {
    
  return (
    
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              page={page}
              count={parseInt(totalPages)}
              variant="outlined"
              color="primary"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`${content}${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    
  );
}