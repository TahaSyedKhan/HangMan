function getButtonStyle(styleType) {
    const primaryButtonStyle = "bg-blue-500 border-blue-700 hover:bg-blue-700 hover:border-blue-900"
    const secoundaryButtonStyle = "bg-gray-500 border-gray-700 hover:bg-gray-700 hover:border-blue-900"
    const successButtonStyle = "bg-green-500 border-green-700 hover:bg-green-700 hover:border-green-900"
    const warningButtonStyle = "bg-yellow-500 border-yellow-700 hover:bg-yellow-700 hover:border-yellow-900"
    const errorButtonStyle = "bg-red-500 border-red-700 hover:bg-red-700 hover:border-red-900"

    if(styleType === "primary") {
        return primaryButtonStyle;
    } else if(styleType === "secoundary") {
        return secoundaryButtonStyle;
    } else if(styleType === "success") {
        return successButtonStyle
    } else if(styleType === "warning") {
        return warningButtonStyle;
    } else if(styleType === "error") {
        return errorButtonStyle;
    } else {
        return primaryButtonStyle;
    }
}

export default getButtonStyle;