import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

var CLOSE_TIMEOUT = 500;
function ReactSlidingPane(_ref) {
  var isOpen = _ref.isOpen,
      title = _ref.title,
      onRequestClose = _ref.onRequestClose,
      onAfterOpen = _ref.onAfterOpen,
      children = _ref.children,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? "right" : _ref$from;
  var directionClass = "slide-pane_from_".concat(from);
  return React.createElement(Modal, {
    className: "slide-pane ".concat(directionClass, " ").concat(className || ""),
    overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ""),
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || "", "\"")
  }, React.createElement("div", {
    className: "slide-pane__content"
  }, children));
}
ReactSlidingPane.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.any,
  subtitle: PropTypes.any,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  from: PropTypes.oneOf(["left", "right", "bottom"]),
  width: PropTypes.string,
  closeIcon: PropTypes.any
};

export default ReactSlidingPane;
