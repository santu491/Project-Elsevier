import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SearchIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 30 30">
    <Path
      d="M23.33 11.87C23.33 5.877 18.093 1 11.664 1 5.235 1 0 5.878 0 11.87c0 5.99 5.235 10.869 11.665 10.869 2.793 0 5.354-.913 7.363-2.446l9.295 8.662L30 27.392l-9.295-8.661c1.645-1.873 2.624-4.259 2.624-6.862zm-20.997 0c0-4.815 4.165-8.696 9.332-8.696 5.167 0 9.331 3.88 9.331 8.695s-4.164 8.696-9.331 8.696-9.332-3.88-9.332-8.696z"
      fill={'#949494'}
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    />
  </Svg>
);
