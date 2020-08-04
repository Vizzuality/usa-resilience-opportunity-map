import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import Link from 'next/link';

import Downshift from 'downshift';
import cx from 'classnames';
import Icon from 'components/icon';
import CLOSE_SVG from 'svgs/close.svg?sprite';
import MAGNIFIER from 'svgs/search.svg?sprite';

function Autocomplete({ className, options, onChange, buildInputProps }) {
  const fuse = new Fuse(options, {
    keys: ['label'],
  });

  return (
    <div className={cx('c-autocomplete', className)}>
      <Downshift
        onChange={onChange}
        itemToString={(item) => (item ? item.label : '')}
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
            .search(inputValue, { limit: 30 })
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
                {...getRootProps({}, { suppressRefError: true })}
              >
                <Icon icon={MAGNIFIER} className="c-autocomplete--magnifier" />
                <input
                  {...buildInputProps(getInputProps)}
                  className={cx('c-autocomplete--input', {
                    '--placeholder': !inputValue,
                  })}
                />
                <button
                  className="dropdown-selector--clearbtn"
                  onClick={() => clearSelection()}
                  type="button"
                >
                  {!!selectedItem && (
                    <Icon icon={CLOSE_SVG} className="c-autocomplete--close" />
                  )}
                </button>
              </div>
              <div {...getMenuProps()} className="c-autocomplete--menu">
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
                        <Link href={`/explore?id=${item.id}`}>
                          <a>{item.label}</a>
                        </Link>
                      </li>
                    ))}
                    {counties.length ? (
                      <h5 className="c-autocomplete--title">Counties</h5>
                    ) : null}
                    {counties.map((item, index) => (
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
                        <Link href={`/explore?id=${item.id}`}>
                          <a>{item.label}</a>
                        </Link>
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
  options: PropTypes.array,
  onChange: PropTypes.func,
  defaultText: PropTypes.string,
  placeholder: PropTypes.string,
  buildInputProps: PropTypes.func,
};

Autocomplete.defaultProps = {
  className: '',
  options: [],
  onChange: undefined,
  defaultText: '',
  placeholder: '',
  buildInputProps: undefined,
};

export default Autocomplete;