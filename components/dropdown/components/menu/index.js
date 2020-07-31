import React from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

const Menu = (props) => {
  const {
    isOpen,
    items,
    showGroup,
    getItemProps,
    highlightedIndex,
    optionsAction,
    optionsActionKey,
    noItemsFound,
    toggleOpenGroup,
    noParentSelection,
    theme,
  } = props;

  const isItemDisplayed = ({ group, groupParent }) =>
    (!showGroup && !group) || group === showGroup || groupParent === showGroup;

  // we must use it like that
  let itemIndex = 0;

  const renderItems = (itms, extraIndent = false) =>
    itms &&
    itms.map((item) => (
      <Item
        key={`${item.slug}${item.id}${item.label}`}
        /* eslint-disable-next-line */
        index={itemIndex++}
        item={item}
        isDisplayed={isItemDisplayed(item)}
        extraIndent={extraIndent}
        showGroup={showGroup}
        highlightedIndex={highlightedIndex}
        getItemProps={getItemProps}
        toggleOpenGroup={toggleOpenGroup}
        optionsAction={optionsAction}
        optionsActionKey={optionsActionKey}
        noParentSelection={noParentSelection}
        theme={theme}
      />
    ));

  const renderMenu = () => {
    if (!items || !items.length) {
      return (
        <div className="dropdown-menu--not-found">
          {noItemsFound || 'No results found'}
        </div>
      );
    }

    return renderItems(items);
  };

  if (!isOpen) return null;

  return <div className="c-dropdown-menu">{renderMenu()}</div>;
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  items: PropTypes.array,
  showGroup: PropTypes.string,
  getItemProps: PropTypes.func,
  highlightedIndex: PropTypes.number,
  optionsAction: PropTypes.func,
  optionsActionKey: PropTypes.string,
  noItemsFound: PropTypes.string,
  noParentSelection: PropTypes.bool,
  toggleOpenGroup: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isOpen: false,
  theme: undefined,
  items: undefined,
  showGroup: undefined,
  getItemProps: undefined,
  highlightedIndex: undefined,
  optionsAction: undefined,
  optionsActionKey: undefined,
  noItemsFound: undefined,
  noParentSelection: false,
};

export default Menu;
