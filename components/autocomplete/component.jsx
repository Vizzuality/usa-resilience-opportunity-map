import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Downshift from 'downshift';
import cx from 'classnames';
import Icon from 'components/icon';
import CLOSE_SVG from 'svgs/close.svg?sprite';
import MAGNIFIER from 'svgs/search.svg?sprite';

function Autocomplete({
  className,
  options,
  activeOption,
  clearable,
  setGeometryId,
}) {
  const buildInputProps = (getInputProps) => {
    return getInputProps({
      placeholder: `${
        className.includes('explore-search')
          ? 'Explore the map. Which state or county would you like to analyze?'
          : 'Enter a state, county name or ZIP code.'
      }`,
    });
  };
  const { pathname } = useRouter();
  const isExplore = pathname === '/explore';

  const fuse = new Fuse(options, {
    keys: ['label'],
  });

  return (
    <div className={cx('c-autocomplete', className)}>
      <Downshift
        itemToString={(item) => (item ? item.label : '')}
        initialInputValue={activeOption?.label}
        initialSelectedItem={activeOption?.label}
        key={activeOption?.label}
        id="autocomplete"
        // TODO: Fix onblur/onmouseleave label issue
        // https://github.com/downshift-js/downshift/issues/717
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue,
          selectedItem,
          getRootProps,
          clearSelection,
        }) => {
          const searchResults = fuse
            .search(inputValue || '', { limit: 30 })
            .map((o) => o.item);
          const states = [];
          const counties = [];
          searchResults.forEach((r) =>
            !r.parentId ? states.push(r) : counties.push(r)
          );

          return (
            <>
              <div
                className="c-autocomplete--select"
                aria-label="autocomplete searchbox"
                {...getRootProps({}, { suppressRefError: true })}
              >
                <Icon icon={MAGNIFIER} className="c-autocomplete--magnifier" />
                <label htmlFor="autocomplete" className="c-autocomplete--label">
                  <input
                    {...buildInputProps(getInputProps)}
                    className={cx('c-autocomplete--input', {
                      '--placeholder': !inputValue,
                    })}
                    aria-label="Enter a location"
                  />
                </label>
                <button
                  className="dropdown-selector--clearbtn"
                  onClick={() => clearSelection()}
                  type="button"
                  aria-label="clear"
                >
                  {!!selectedItem && clearable && (
                    <Icon icon={CLOSE_SVG} className="c-autocomplete--close" />
                  )}
                </button>
              </div>
              <div
                {...getMenuProps()}
                className="c-autocomplete--menu"
                aria-label="locations list"
              >
                {isOpen ? (
                  <>
                    {states.length ? (
                      <h5 className="c-autocomplete--title">States</h5>
                    ) : null}
                    {states.map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                        })}
                        className={cx('c-autocomplete--item', {
                          '--selected': selectedItem === item,
                        })}
                      >
                        {isExplore ? (
                          <a
                            role="button"
                            tabIndex="0"
                            onClick={() => setGeometryId(item.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link href={`/explore?id=${item.id}`}>
                            <a>{item.label}</a>
                          </Link>
                        )}
                      </li>
                    ))}
                    {counties.length ? (
                      <h5 className="c-autocomplete--title">Counties</h5>
                    ) : null}
                    {counties.map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item.value,
                          index: index + states.length,
                          item,
                        })}
                        className={cx('c-autocomplete--item', {
                          '--selected': selectedItem === item,
                        })}
                      >
                        {isExplore ? (
                          <a
                            role="button"
                            tabIndex="0"
                            onClick={() => setGeometryId(item.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link href={`/explore?id=${item.id}`}>
                            <a>{item.label}</a>
                          </Link>
                        )}
                      </li>
                    ))}
                  </>
                ) : null}
              </div>
            </>
          );
        }}
      </Downshift>
    </div>
  );
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  clearable: PropTypes.bool,
  options: PropTypes.array,
  activeOption: PropTypes.object,
  defaultText: PropTypes.string,
  placeholder: PropTypes.string,
  setGeometryId: PropTypes.func,
};

Autocomplete.defaultProps = {
  className: '',
  clearable: false,
  options: [],
  defaultText: '',
  placeholder: '',
};

export default Autocomplete;
