'use client';
import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRightIcon, EyeIcon, EyeSlashIcon, ArrowLeftIcon, WarningCircleIcon } from '@phosphor-icons/react';

type FormState = 'idle' | 'loading' | 'error';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    // TODO: wire up to auth provider
    await new Promise(r => setTimeout(r, 800));
    setState('error');
  }

  return (
    <div className="auth-page">
      <div className="auth-bg" aria-hidden="true" />
      <div className="auth-stars" aria-hidden="true" />

      <div className="auth-wrap">
        <a href="/" className="auth-logo" aria-label="Back to homepage">
          <BrandLogo height={36} />
        </a>

        <div className="auth-card">
          <div className="auth-card-head">
            <h1 className="auth-title">Sign in to your dashboard</h1>
            <p className="auth-sub">Manage calls, bookings, and analytics across your properties.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            <div className="form-field">
              <Label htmlFor="email" className="form-label">
                Email address <span className="form-req">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@hotel.com"
                required
              />
            </div>

            <div className="form-field">
              <Label htmlFor="password" className="form-label">
                Password <span className="form-req">*</span>
              </Label>
              <div className="auth-pw-wrap">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="auth-pw-input"
                  required
                />
                <button
                  type="button"
                  className="auth-pw-toggle"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeSlashIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>

            <div className="auth-row">
              <label className="auth-remember">
                <Checkbox name="remember" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="auth-forgot">Forgot password?</a>
            </div>

            {state === 'error' && (
              <div className="form-error-banner">
                <WarningCircleIcon size={16} />
                Incorrect email or password. Please try again.
              </div>
            )}

            <Button type="submit" variant="gold" className="w-full" disabled={state === 'loading'}>
              {state === 'loading'
                ? 'Signing in…'
                : <>Sign in <span className="arrow"><ArrowRightIcon size={16} /></span></>
              }
            </Button>
          </form>
        </div>

        <a href="/" className="auth-back">
          <ArrowLeftIcon size={15} />
          Back to homepage
        </a>
      </div>
    </div>
  );
}
