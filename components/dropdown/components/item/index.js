import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Item = (props) => {
  const {
    extraIndent,
    getItemProps,
    highlightedIndex,
    index,
    isDisplayed,
    item,
    noParentSelection,
    showGroup,
    toggleOpenGroup,
  } = props;
  const { group, groupParent, label } = item;
  const isGroupParentActive = groupParent && showGroup === groupParent;
  const isHighlighted =
    highlightedIndex === index || (groupParent && groupParent === showGroup);
  const showToChildrenArrow =
    groupParent && showGroup !== groupParent && isDisplayed;
  const parentClickProp =
    noParentSelection && (!showGroup || isGroupParentActive)
      ? { onClick: () => toggleOpenGroup(item) }
      : {};

  return (
    <div
      className={cx({
        'c-dropdown-item': true,
        '-show': isDisplayed,
        '-base': !group,
        '-selected': isGroupParentActive,
        '-group-parent': groupParent,
      })}
    >
      {isGroupParentActive && (
        <button onClick={() => toggleOpenGroup(item)}>Back</button>
      )}

      <div
        {...getItemProps({
          item,
          index,
          className: cx({
            'dropdown-item--container': true,
            '-highlight': isHighlighted,
            '-indent': extraIndent,
          }),
        })}
        {...parentClickProp}
      >
        {label}
      </div>

      {showToChildrenArrow && (
        <button onClick={() => toggleOpenGroup(item)}>Go</button>
      )}
    </div>
  );
};

Item.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  showGroup: PropTypes.string,
  highlightedIndex: PropTypes.number,
  getItemProps: PropTypes.func.isRequired,
  toggleOpenGroup: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  noParentSelection: PropTypes.bool,
  isDisplayed: PropTypes.bool,
  extraIndent: PropTypes.bool,
};

Item.defaultProps = {
  index: undefined,
  item: undefined,
  showGroup: undefined,
  highlightedIndex: undefined,
  noParentSelection: false,
  theme: undefined,
  isDisplayed: true,
  extraIndent: false,
};

export default Item;
