
# Urban Mobility Insights - Accuracy Report Generator

This is a multi-step landing page web application that collects user inputs to generate a "Free Accuracy Report for Urban Mobility." The application follows a professional design with an emphasis on user experience and clean UI.

## Features

- **Professional Design**: Vivid orange background, clean white cards, and an intuitive UI
- **Multi-Step Form**: Smooth transitions between form steps with animations
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Interactive File Upload**: Drag-and-drop functionality with validation
- **Form Validation**: Input validation to ensure data quality
- **Processing State**: Visual feedback for users during data processing
- **Summary View**: Comprehensive overview of collected data
- **Success Screen**: Confirmation and download options

## Tech Stack

- **Frontend**:
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Shadcn UI components
  - Form handling with built-in validation

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Project Structure

- `/src/components`: Reusable UI components
- `/src/components/forms`: Form components for each step
- `/src/pages`: Main pages of the application
- `/src/lib`: Utility functions and hooks

## Form Flow

1. **Upload & Context**: Upload CSV data and provide basic information
2. **Optional Context**: Add additional contextual information
3. **Model Objective**: Define the service and prediction needs
4. **Processing**: Data analysis and preparation
5. **Summary**: Overview of collected data and final submission
6. **Success**: Download report and completion

## License

[MIT](LICENSE)
