# App-Planung: f1nance pl4nner

## Überblick

**Beschreibung:** Eine React-App mit Supabase-Backend zur Dokumentation persönlicher Einnahmen und Ausgaben
**Zielgruppe:** Persönlicher Gebrauch (vorerst)
**Hauptziel:** Einfache, übersichtliche Verwaltung der persönlichen Finanzen

## Tech-Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** TailwindCSS
- **State Management:** TanStack Query
- **Routing:** TanStack Router
- **Backend:** Supabase (Database + Auth)
- **Validation:** Zod
- **Forms:** React Hook Form
- **UI Components:** React Aria / Ariakit / BaseUI (statt shadcn)

## MoSCoW-Priorisierung

### Must Have (Muss haben)

- [ ] **Transaktions-Management**
  - Einnahmen und Ausgaben hinzufügen
  - Transaktionen bearbeiten und löschen
  - Transaktions-Detail-Seite
- [ ] **Konto-Verwaltung**
  - Verschiedene Konten anlegen (Bankkonto, PayPal, Kreditkarte, etc.)
  - Konten in Settings verwalten
  - Balance Tracking (automatisch berechnet)
- [ ] **Kategorie-System**
  - Kategorien erstellen und verwalten (Essen, Miete, Fixkosten, etc.)
  - Farbzuweisung für Kategorien (initial random)
  - Kategorien sind kontoübergreifend
- [ ] **Währungs-Management**
  - Währung auswählen (Standard: Euro)
  - Gilt benutzerweit über alle Konten
- [ ] **Authentifizierung**
  - Login über Supabase Auth
  - Multi-App User Management System
- [ ] **Core Pages**
  - Home: Tabellarische Übersicht aller Transaktionen
  - Add: Formular für neue Einträge
  - Settings: Kategorien- und Kontenverwaltung

### Should Have (Sollte haben)

- [ ] **Filter-System**
  - Zeitraum-Filter (letzte 3 Monate, etc.)
  - Konto-spezifische Filter
  - Kategorie-spezifische Filter
- [ ] **Charts & Analytics**
  - Grafische Darstellung der Daten
  - Kuchendiagramm für Ausgaben nach Kategorien
  - Balance Tracking in Charts
  - Filter auch für Charts verfügbar

### Could Have (Könnte haben)

- [ ] **Erweiterte Filter**
  - Manueller Datumsbereich (von-bis)
  - Kombinierte Filter
- [ ] **Recurring Transactions**
  - Wiederkehrende Einträge (Miete, Gehalt)
  - Automatische Erstellung basierend auf Zeitplan
- [ ] **Budget Goals**
  - Monatliche Budgets pro Kategorie setzen
  - Warnung bei Überschreitung
- [ ] **Währungsumrechnung**
  - Umrechnung in andere Währungen
  - Historische Wechselkurse

### Won't Have (Wird nicht haben - diesmal)

- Payment Features (Stripe, Abos)
- Passwort-Reset Funktionalität
- Multi-User Features
- Mobile App
- CSV Import/Export
- Dashboard Widgets

## Pages

- homepage: Transaktionsübersicht, table

## Database Schema (Vorschlag)

### Multi-App User Management

```sql
-- App-übergreifender User Table
CREATE TABLE app_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supabase_user_id UUID REFERENCES auth.users(id),
  email TEXT NOT NULL,
  app_permissions JSONB DEFAULT '{}', -- {"f1nance": 1000, "other_app": 500}
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

```sql
-- User Settings
CREATE TABLE f1nance_user_settings (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES app_users(id),
default_currency TEXT DEFAULT 'EUR',
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW()
);
```

```sql
-- Konten
CREATE TABLE f1nance_accounts (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES app_users(id),
name TEXT NOT NULL,
type TEXT, -- "bank", "paypal", "credit_card", etc.
created_at TIMESTAMP DEFAULT NOW()
);
```

```sql
-- Kategorien
CREATE TABLE f1nance_categories (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES app_users(id),
name TEXT NOT NULL,
color TEXT, -- hex color code
budget_limit DECIMAL(10,2), -- für Budget Goals
created_at TIMESTAMP DEFAULT NOW()
);
```

```sql
-- Transaktionen
CREATE TABLE f1nance_transactions (
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID REFERENCES app_users(id),
account_id UUID REFERENCES f1nance_accounts(id),
category_id UUID REFERENCES f1nance_categories(id),
amount DECIMAL(10,2) NOT NULL,
type TEXT CHECK (type IN ('income', 'expense')),
description TEXT,
transaction_date DATE NOT NULL,
is_recurring BOOLEAN DEFAULT FALSE,
recurring_pattern TEXT, -- "monthly", "weekly", etc.
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW()
);
```
