// Mock expo-font to handle font-related errors
jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true),
}));

// Mock @expo/vector-icons to avoid errors with native modules
jest.mock("@expo/vector-icons", () => {
  const MockIcon = (props) => `MockedIcon-${props.name}`;
  return {
    createIconSet: jest.fn(() => MockIcon),
    Ionicons: MockIcon,
    MaterialIcons: MockIcon,
    FontAwesome: MockIcon,
    Entypo: MockIcon,
  };
});

// Cleanup after each test
afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
