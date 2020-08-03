import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import CLOSE_SVG from 'svgs/ui/close.svg?sprite';
// import ARROW_DOWN__SVG from 'svgs/ui/arrow-down.svg?sprite';

// import Icon from 'components/icon';

const Selector = (props) => {
  const {
    className,
    isOpen,
    disabled,
    arrowPosition,
    onSelectorClick,
    clearable,
    searchable,
    inputProps,
    handleClearSelection,
    children,
    innerRef,
    placeholder,
    defaultText,
    selectedOptionsTooltip,
    values,
  } = props;
  const showCloseIcon = clearable && values.length > 0;
  const showDownArrow = arrowPosition !== 'left' && !disabled;
  const valuesSelectedLength = values.length;
  const valuesSelectedLabel =
    valuesSelectedLength === 1
      ? values[0].label
      : valuesSelectedLength &&
        `${valuesSelectedLength} ${defaultText.selected}`;

  const arrowDown = (
    <button
      className="dropdown-selector--arrowbtn"
      onClick={onSelectorClick}
      type="button"
    >
      {/* <Icon icon={ARROW_DOWN__SVG} /> */}
    </button>
  );

  const getSelectedOptionsTooltipText = () => {
    if (!values || values.length < 2 || !selectedOptionsTooltip) return '';

    return values.map((o) => o.label).join(', ');
  };

  return (
    <div
      ref={innerRef}
      className={cx({
        'c-dropdown-selector': true,
        [className]: !!className,
      })}
    >
      <div
        data-tip={getSelectedOptionsTooltipText()}
        data-for="multiLevelDropdownOptionsTooltip"
        className={cx({
          'dropdown-selector--container': true,
          '-align-left': arrowPosition,
          '-disabled': disabled,
        })}
      >
        {arrowPosition === 'left' && arrowDown}

        <span
          className={cx({
            'dropdown-selector--value': true,
            '-placeholder': !isOpen && valuesSelectedLength === 0,
          })}
        >
          {(isOpen && !searchable) || !isOpen
            ? valuesSelectedLabel || placeholder
            : ''}
        </span>

        <input {...inputProps()} />

        {showCloseIcon && (
          <button
            className="dropdown-selector--clearbtn"
            onClick={handleClearSelection}
            type="button"
          >
            {/* <Icon icon={CLOSE_SVG} /> */}
          </button>
        )}
        {showDownArrow && arrowDown}
      </div>

      {children}
    </div>
  );
};

Selector.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  arrowPosition: PropTypes.string,
  onSelectorClick: PropTypes.func,
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  inputProps: PropTypes.func,
  handleClearSelection: PropTypes.func,
  placeholder: PropTypes.string,
  innerRef: PropTypes.func,
  defaultText: PropTypes.shape({ selected: PropTypes.string }),
  values: PropTypes.array,
  selectedOptionsTooltip: PropTypes.bool,
};

Selector.defaultProps = {
  className: undefined,
  children: undefined,
  isOpen: undefined,
  disabled: false,
  arrowPosition: undefined,
  onSelectorClick: undefined,
  clearable: false,
  searchable: false,
  inputProps: undefined,
  handleClearSelection: undefined,
  placeholder: undefined,
  innerRef: undefined,
  defaultText: { selected: 'selected' },
  values: [],
  selectedOptionsTooltip: true,
};

export default Selector;
