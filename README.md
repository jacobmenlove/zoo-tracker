# 🦁 Zoo Animal and Employee Tracker

A TypeScript-based command-line application for managing zoo animals and employees using Object-Oriented Programming (OOP) principles.

## 📖 Description

This application provides a comprehensive system for tracking animals and employees at a zoo. Built with TypeScript and following OOP design patterns, it demonstrates inheritance, interface implementation, and type safety. Users can add animals and staff members, view rosters, feed hungry animals, and process employee payments through an interactive CLI powered by Inquirer.js.

## ✨ Features

- 🐾 **Animal Management**: Add and track different species with hunger status, weight, and population counts
- 👥 **Employee Management**: Register ZooKeepers and ZooWorkers with unique IDs and salaries
- 🍖 **Feeding System**: Identify and feed hungry animals
- 💰 **Payroll System**: Process employee payments
- 📊 **Viewing Tools**: Display comprehensive lists of animals and staff
- 🔒 **Type Safety**: Full TypeScript implementation with interfaces and classes

## 🛠️ Technologies Used

- **TypeScript**: Static typing and OOP features
- **Node.js**: Runtime environment
- **Inquirer.js**: Interactive command-line interface
- **ES2020 Modules**: Modern JavaScript module system

## 📁 Project Structure

```
zoo-tracker/
│
├── src/
│   ├── interfaces/
│   │   ├── Work.ts              # Interface for employee payment
│   │   └── ZooAnimals.ts        # Interface for animal properties
│   │
│   ├── classes/
│   │   ├── Animal.ts            # Animal class implementation
│   │   ├── Employee.ts          # Base employee class
│   │   ├── ZooKeeper.ts         # ZooKeeper extends Employee
│   │   └── ZooWorker.ts         # ZooWorker extends Employee
│   │
│   ├── Cli.ts                   # Command-line interface logic
│   └── index.ts                 # Application entry point
│
├── dist/                        # Compiled JavaScript (generated)
├── node_modules/                # Dependencies (generated)
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/zoo-tracker.git
   cd zoo-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the TypeScript files:**
   ```bash
   npm run build
   ```

## 💻 Usage

**Run the application:**
```bash
npm start
```

**Or build and run in one command:**
```bash
npm run dev
```

**Available Menu Options:**
- Add Animal
- Add ZooKeeper
- Add ZooWorker
- View Animals
- View Employees
- Feed Animals
- Pay Employees
- Exit

## 📝 Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Build and run in one command

## 🏗️ Architecture

### Interfaces
- **Work**: Defines the contract for employee payment functionality
- **ZooAnimals**: Defines the structure for animal objects

### Classes
- **Employee**: Base class implementing Work interface
    - Properties: name, id, title, salary
    - Method: receivePay()

- **ZooKeeper**: Extends Employee
    - Specialized role for animal care

- **ZooWorker**: Extends Employee
    - General zoo maintenance role

- **Animal**: Implements ZooAnimals interface
    - Properties: species, hungry, weight, amount
    - Method: makeRollCall()

### CLI
The Cli class manages user interaction and orchestrates all operations:
- Animal creation and management
- Employee registration
- Feeding operations
- Payroll processing

## 🎯 Learning Objectives

This project demonstrates:
- ✅ TypeScript fundamentals and type safety
- ✅ Object-Oriented Programming principles
- ✅ Class inheritance and polymorphism
- ✅ Interface implementation
- ✅ Working with typed arrays
- ✅ Interactive CLI development
- ✅ ES6+ module system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Built as part of a TypeScript and OOP learning module
- Inquirer.js for the excellent CLI framework