type AssetPlaceholderProps = { label: string; className?: string; compact?: boolean }

export function AssetPlaceholder({ label, className = '', compact = false }: AssetPlaceholderProps) {
  return <div className={`asset-placeholder ${compact ? 'asset-placeholder--compact' : ''} ${className}`} data-status="placeholder" role="status" aria-label={`${label}: asset pending approval`}><span aria-hidden="true">CJ</span><strong>{label}</strong><small>Asset Pending Approval</small></div>
}
