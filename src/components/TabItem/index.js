import './index.css'

const TabItem = props => {
  // add [updateActiveTabId] as props And Access [isActive]
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  // condition to underline color in button isActive is True or false
  const activeClassName = isActive ? 'active-tab-btn' : ''

  // onClick Adding eventListener to TabItem
  const updateTabId = () => {
    //   Sending tabId as Callback
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        // here to change css color
        className={`tab-btn ${activeClassName}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
