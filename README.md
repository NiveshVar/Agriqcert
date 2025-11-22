# AgriQCert Frontend

A modern, high-tech frontend application for the AgriQCert Agricultural Quality Certification Platform.

## Features

- 🔐 **Authentication System** - Secure login with role-based access
- 📦 **Batch Management** - Submit and track agricultural product batches
- 🔍 **Quality Inspections** - QA agencies can conduct inspections
- 📄 **Digital Certificates** - Blockchain-verified quality certificates with QR codes
- ✅ **Certificate Verification** - Real-time certificate verification
- 🎨 **Modern UI/UX** - Beautiful, responsive design with animations

## Tech Stack

- **React 19** - Latest React version
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **QRCode.react** - QR code generation
- **Modern CSS** - Custom styling with animations and gradients

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (optional):
```env
REACT_APP_API_URL=http://localhost:5000
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── Login.js        # Login page
│   ├── Dashboard.js    # Main dashboard
│   ├── BatchForm.js    # Batch submission form
│   ├── InspectionForm.js # Quality inspection form
│   └── CertificateViewer.js # Certificate display
├── context/            # React Context providers
│   └── AuthContext.js  # Authentication context
├── services/           # API services
│   └── api.js         # API client
└── App.js             # Main app component
```

## User Roles

### Exporter
- Submit new batches
- View batch status
- View and download certificates
- Track certification progress

### QA Agency
- View pending inspections
- Conduct quality inspections
- Submit inspection results

## API Integration

The frontend connects to the backend API at `http://localhost:5000` by default. Make sure your backend server is running.

### API Endpoints Used:
- `POST /api/auth/login` - User authentication
- `GET /api/batches` - Get all batches
- `POST /api/batches` - Create new batch
- `GET /api/inspections/pending` - Get pending inspections
- `POST /api/inspections/:id` - Submit inspection
- `GET /api/certificates` - Get all certificates
- `POST /api/certificates/issue/:batchId` - Issue certificate
- `GET /api/certificates/verify/:id` - Verify certificate
- `GET /api/certificates/download/:id` - Download certificate

## Features in Detail

### Dashboard
- Role-based views (Exporter/QA Agency)
- Real-time statistics
- Quick actions
- Status tracking

### Batch Submission
- Product type selection
- Quantity input
- Destination country
- Form validation

### Quality Inspection
- Moisture level testing
- Pesticide content measurement
- Organic certification status
- Pass/fail determination

### Certificate Viewer
- Full certificate details
- QR code for verification
- Blockchain proof display
- Download functionality
- Real-time verification

## Styling

The application uses modern CSS with:
- Gradient backgrounds
- Smooth animations
- Responsive design
- Glassmorphism effects
- Modern color schemes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Notes

- The application requires the backend server to be running
- Authentication tokens are stored in localStorage
- QR codes are generated from certificate data
- All API calls include error handling
