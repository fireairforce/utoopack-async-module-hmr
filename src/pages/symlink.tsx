import { describeSymlinkCase, features, symlinkSource } from '../symlink-case-lib';

const blockStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: 12,
  padding: 16,
  marginBottom: 16,
};

const codeStyle = {
  fontFamily: 'monospace',
  background: '#f5f5f5',
  padding: '2px 6px',
  borderRadius: 6,
};

const SymlinkPage = () => {
  return (
    <div style={{ maxWidth: 760 }}>
      <h2>Symlink Case</h2>
      <p>这个页面直接从一个软链接目录导入模块，用来验证 utoopack 对 symlink 的解析能力。</p>

      <div style={blockStyle}>
        <h3>Import Path</h3>
        <p>
          import from <span style={codeStyle}>../symlink-case-lib</span>
        </p>
        <p>
          actual file <span style={codeStyle}>{symlinkSource}</span>
        </p>
      </div>

      <div style={blockStyle}>
        <h3>Runtime Value</h3>
        <p>{describeSymlinkCase('umi')}</p>
      </div>

      <div style={blockStyle}>
        <h3>Checks</h3>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SymlinkPage;
